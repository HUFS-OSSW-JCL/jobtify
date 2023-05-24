import Crawl_Function
import time

def SearchJob(keyword):
    rallit = Crawl_Function.Crawler("https://www.rallit.com/")
    rallit.OpenSite()
    rallit.driver.implicitly_wait(10)
    rallit.Search(keyword, "//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input","//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input")
    time.sleep(1)
    job_lists = rallit.GetJobInfo("#__next > main > div > section.css-1xvi5b5", "ul > li")
    job_dict = rallit.ReturnList(job_lists, "article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(2) > h3", "article > a > div.css-1gw9rd1 > div:nth-child(1) > div:nth-child(1) > p", " ", "article > a")
    return job_dict