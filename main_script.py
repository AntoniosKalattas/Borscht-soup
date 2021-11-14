import bs4
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import sys

print("url:::::::::::::::,", )
url = str(sys.argv[2])
elements_to_check= (sys.argv[1])
elements = str(sys.argv[3])
soup_elements = []
main_commands=[]


uClient = uReq(url)
page = uClient.read()
uClient.close()
s = soup(page, 'lxml')



for i in range(len(elements)):
    j=0
    if(elements[i]!=","):
        soup_elements.append(elements[i])
    else:
        main_commands.append(''.join(soup_elements))
        j+=1
        soup_elements=[]
main_commands.append(''.join(soup_elements))

uClient = uReq(url)
page = uClient.read()
uClient.close()
s = soup(page, 'lxml')

def web_scrap():
    print(main_commands[1])
    print("skata------------------------------------------------------",s.find(main_commands[1]))


web_scrap() 
print(main_commands)
print("url= ", url)
print("done")