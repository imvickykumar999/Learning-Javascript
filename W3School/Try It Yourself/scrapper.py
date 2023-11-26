from bs4 import BeautifulSoup
import os

with open("tryjs_intro_lightbulb.html") as fp:
    soup = BeautifulSoup(fp, 'html5lib')

a = soup.findAll('button', attrs = {'type': 'button'})
src = a[0]['onclick'].split("'")[3]

print(src)
os.startfile(src)
