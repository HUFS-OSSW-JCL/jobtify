import Crawl_Function
import time

def SearchJob(keyword):
    rallit = Crawl_Function.Crawler("https://www.r-allit.com/")
    rallit.OpenSite()
    rallit.Search(keyword, "//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input","//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input")
    time.sleep(2)
    rallit.GetJobInfo("#__next > main > div > section.css-1xvi5b5", "ul > li")
    job_list = rallit.ReturnList("article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(2) > h3", "article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(1) > p", "", "article > a" )
    