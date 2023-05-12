import Crawl_Function
from selenium.webdriver.common.by import By
from selenium import webdriver

def SearchJob(keyword):
    incruit = Crawl_Function.Crawler("https://job.incruit.com/jobdb_list/searchjob.asp?ct=3&ty=1&cd=149")
    incruit.OpenSite()
    incruit.driver.find_
    incruit.Search(keyword,  "//*[@id=\"kw\"]", "//*[@id=\"kw\"]" )
