from selenium import webdriver
import Crawl_Function
from selenium.webdriver.common.by import By
import time

def SearchJob(keyword):
    incruit = Crawl_Function.Crawler("https://job.incruit.com/jobdb_list/searchjob.asp?ct=3&ty=1&cd=149")
    incruit.OpenSite()
    incruit.Search(keyword,  "//*[@id=\"kw\"]", "//*[@id=\"kw\"]" )
    incruit.driver.find_element(By.CSS_SELECTOR, "#incruit_contents > div > ul > li:nth-child(2) > a").click()
    time.sleep(3)
    incruit.GetJobInfo("#incruit_contents > div > div > div.cBbslist_contenst", "li")
    job_lists = incruit.ReturnList("div.cell_mid > div.cl_top","div.cell_first > div.cl_top > a")
    return job_lists