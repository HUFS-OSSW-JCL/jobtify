from selenium import webdriver
import Crawl_Function
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def SearchJob(keyword, area_list):
    incruit = Crawl_Function.Crawler("https://job.incruit.com/jobdb_list/searchjob.asp?ct=3&ty=1&cd=149")
    incruit.OpenSite()

    incruit.Area_Filter(area_list, "//*[@id=\"rgn2_ul_149\"]", "li", " ")

    #연차검색
    incruit.Click_By_CSS_SELECTOR("#dropFirstList3")
    incruit.Click_By_CSS_SELECTOR("#crr_list")
    incruit.Click_By_CSS_SELECTOR("#crr_list > option:nth-child(3)")


    #세부 검색
    incruit.Search(keyword, "//*[@id=\"txtSearchKw\"]", "//*[@id=\"txtSearchKw\"]")
    incruit.driver.find_element(By.XPATH, "//*[@id=\"txtSearchKw\"]").send_keys(Keys.ARROW_LEFT)
    incruit.driver.find_element(By.XPATH, "//*[@id=\"txtSearchKw\"]").send_keys(Keys.ARROW_RIGHT)
    time.sleep(0.5)


    filter = incruit.driver.find_element(By.CSS_SELECTOR, "#divAutoComplete > ul")
    fil2 = filter.find_elements(By.CSS_SELECTOR, "li")
    #time.sleep(1)
    for fil in fil2:
        v = fil.find_element(By.CSS_SELECTOR, "label > span")
        if "직접검색" in v.text:
            v.click()
    time.sleep(0.5)
    incruit.Click_By_CSS_SELECTOR("#SearchResultCount")


    try:
        while 1:
            job_lists = incruit.GetJobInfo("cBbslist_contenst", "li")
            job_dict = incruit.ReturnList(job_lists, "div.cell_mid > div.cl_top","div.cell_first > div.cl_top > a", "div.cell_mid > div.cl_top > a", 'Incruit')
            incruit.Click_By_CSS_SELECTOR("#JobList_Area > div.cPrdlists_wrap.cPrdlists_wrap_respon > p > a.next_n")
            incruit.driver.implicitly_wait(5)
    except Exception:
        return job_dict