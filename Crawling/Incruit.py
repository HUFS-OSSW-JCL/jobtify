from selenium import webdriver
import Crawl_Function
from selenium.webdriver.common.by import By
import time

def SearchJob(keyword):
    incruit = Crawl_Function.Crawler("https://job.incruit.com/jobdb_list/searchjob.asp?ct=3&ty=1&cd=149")
    incruit.OpenSite()
    incruit.driver.find_element(By.CSS_SELECTOR, "#dropFirstList3").click()
    incruit.driver.find_element(By.CSS_SELECTOR, "#crr_list").click()
    incruit.driver.find_element(By.CSS_SELECTOR, "#crr_list > option:nth-child(3)").click()
    time.sleep(2)
    incruit.Search(keyword, "//*[@id=\"txtSearchKw\"]", "//*[@id=\"txtSearchKw\"]")
    time.sleep(2)
    filter = incruit.driver.find_element(By.CSS_SELECTOR, "#divAutoComplete > ul")
    fil2 = filter.find_elements(By.CSS_SELECTOR, "li")
    time.sleep(2)
    for fil in fil2:
        v = fil.find_element(By.CSS_SELECTOR, "label > span")
        if "직접검색" in v.text:
            v.click()
    time.sleep(2)
    incruit.driver.find_element(By.XPATH, "//*[@id=\"SearchResultCount\"]").click()
    incruit.GetJobInfo("#incruit_contents > div > div > div.cBbslist_contenst", "li")
    job_lists = incruit.ReturnList("div.cell_mid > div.cl_top","div.cell_first > div.cl_top > a","div.cell_last > div.cl_btm > span:nth-child(1)", "div.cell_mid > div.cl_top > a")
    return job_lists
