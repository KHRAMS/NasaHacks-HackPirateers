'''
Created on Apr 29, 2017

@author: Kashyap
'''
from __future__ import division
import pymysql
from pyspark import SparkConf, SparkContext
from pyspark.sql import SQLContext
from mysqlx.connection import catch_network_exception

gender = raw_input("gender: ")
race = raw_input("race: ")
age = 23
location = raw_input("location: ")

connection = pymysql.Connect(host='localhost',user='root',password='root',db='nasa',charset='utf8mb4', cursorclass=pymysql.cursors.DictCursor)
cursor = connection.cursor()
#query = "LOAD DATA INFILE '/tmp/myfile1.txt ' INTO TABLE wolfram FIELDS TERMINATED BY '|' ENCLOSED BY '' ESCAPED BY '\n'"
#Names are Variable
query = "SELECT pop_est_2014 FROM state_population WHERE state = '%s' "  % (location)

x = 0
#This gets population in state
cursor.execute( query )
result = cursor.fetchone()
print result
print result.values()
x = result.values()[0]
connection.commit()
#print x

y = ""
#This gets percentage of race in state
query = "SELECT %s FROM state_ethnicity WHERE location = '%s' "  % (race,location)
cursor.execute( query )
result = cursor.fetchone()
y = result.values()[0]
y = float(y)
connection.commit()
#Print amount of race in state
f = x * y 
print f

d = ""
query = "SELECT Column_2010_DENSITY FROM population_density_state WHERE STATE_OR_REGION = '%s' "  % (location)
cursor.execute( query )
result = cursor.fetchone()
d = result.values()[0]
d = float(d)
connection.commit()
#Print amount of race in state



z = ""
#Percent of acute conjunctivitis for gender and race 
query = "SELECT %s FROM acute_conjunctivitis WHERE circumstance = '%s' "  % (gender,race)
cursor.execute( query )
result = cursor.fetchone()
z = result.values()[0]
#Prevent error when string gives ~~0
try:
    z = float(z)
    z = z/100
except:
    z = 0
    z=z/100
connection.commit()

g = z * f
print g  
disease = "acute conjunctivitis"

#d = float(d)
print repr(d)
percent_rate = (g/d)/100

cursor.execute (" INSERT INTO Data_Output (Circumstance,Gender,Race,State,Output,Output_Percentage_For_Original_State) VALUES (%s,%s,%s,%s,%s,%s) ", (disease, gender, race, location, g,percent_rate))
connection.commit()
connection.close()