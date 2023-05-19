from selenium import webdriver
import Crawl_Function
from selenium.webdriver.common.by import By
import time

def SearchJob(keyword):
    incruit = Crawl_Function.Crawler("https://job.incruit.com/jobdb_list/searchjob.asp?ct=3&ty=1&cd=149")
    incruit.OpenSite()
    #2년 이하의 경력을 요구하는 공고만을 보기 위한 필터
    incruit.click("#dropFirstList3")
    incruit.click("#crr_list")
    incruit.click("#crr_list > option:nth-child(3)")

    #키워드를 검색하는 부분
    incruit.Search(keyword, "//*[@id=\"txtSearchKw\"]", "//*[@id=\"txtSearchKw\"]")
    time.sleep(1)
    filter = incruit.driver.find_element(By.CSS_SELECTOR, "#divAutoComplete > ul")
    fil2 = filter.find_elements(By.CSS_SELECTOR, "li")
    time.sleep(2)
    for fil in fil2:
        v = fil.find_element(By.CSS_SELECTOR, "label > span")
        if "직접검색" in v.text:
            v.click()
    time.sleep(2)
    incruit.click("#SearchResultCount")
  
    incruit.GetJobInfo("#incruit_contents > div > div > div.cBbslist_contenst", "li")
    job_lists = incruit.ReturnList("div.cell_mid > div.cl_top","div.cell_first > div.cl_top > a","div.cell_last > div.cl_btm > span:nth-child(1)", "div.cell_mid > div.cl_top > a")
    return job_lists
