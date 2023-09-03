import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import sys
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
# set up webdriver
options = Options()
options.headless = True
driver = webdriver.Firefox(options=options)
#take the url
url = str(sys.argv[2])
#number of element to check up
num_of_elements= int(str(sys.argv[1]))
#get the string of elementsx
string_element = str(sys.argv[3])
print(string_element)

elements = []
element_str = ""
#split the elements
elements = string_element.split("!__!,")
#due to the last element having the chars !__!
last_element = elements[1].replace("!__!", "") 
elements[num_of_elements-1] = last_element
#debug output later remove
print (elements)

#driver.quit()

#elements = str(sys.argv[3])
#soup_elements = []
#main_commands=[]
#
#
#uClient = uReq(url)
#page = uClient.read()
#uClient.close()
#s = soup(page, 'lxml')
#
#
#
#for i in range(len(elements)):
#    j=0
#    if(elements[i]!=","):
#        soup_elements.append(elements[i])
#    else:
#        main_commands.append(''.join(soup_elements))
#        j+=1
#        soup_elements=[]
#main_commands.append(''.join(soup_elements))
#
#uClient = uReq(url)
#page = uClient.read()
#uClient.close()
#s = soup(page, 'lxml')
#
#def web_scrap():
#    for i in range(int(elements_to_check)):
#        if(s.find(main_commands[i])==True):
#            print("Found" + i)
#        else:
#            print("Couldn't find element")
#
#
#web_scrap() 
##print(main_commands)
##print("url= ", url)
#print("done")
