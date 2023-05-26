from selenium import webdriver
import Crawl_Function
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
import time

def SearchJob(keyword):
    incruit = Crawl_Function.Crawler("https://job.incruit.com/jobdb_list/searchjob.asp?ct=3&ty=1&cd=149")
    incruit.OpenSite()

    area_filter = incruit.driver.find_element(By.CSS_SELECTOR, "#rgn2_ul_149")
    filters = area_filter.find_elements(By.CSS_SELECTOR, "li")
    for area in filters:
        area_fil = area.find_element(By.TAG_NAME, "span")
        if area_fil.text in "서울 강남구":
            area.click()
    time.sleep(0.5)
    tl_filter = incruit.driver.find_element(By.CSS_SELECTOR, "#rgn3_ul_11")
    filter2 = tl_filter.find_elements(By.CSS_SELECTOR, "li")
    for a in filter2:
        area_fill = a.find_element(By.CSS_SELECTOR, "label > span")
        if area_fill.text in "서울 은평구":
            pass
            #a.find_element(By.CSS_SELECTOR, "label").click()
    time.sleep(2)

    #연차검색
    incruit.click("#dropFirstList3")
    incruit.click("#crr_list")
    incruit.click("#crr_list > option:nth-child(3)")


    #세부 검색
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
    incruit.click("#SearchResultCount")


    try:
        while 1:
            job_lists = incruit.GetJobInfo("#incruit_contents > div > div > div.cBbslist_contenst", "li")
            job_dict = incruit.ReturnList(job_lists, "div.cell_mid > div.cl_top","div.cell_first > div.cl_top > a","div.cell_last > div.cl_btm > span:nth-child(1)", "div.cell_mid > div.cl_top > a")
            incruit.driver.find_element(By.CSS_SELECTOR, "#JobList_Area > div.cPrdlists_wrap.cPrdlists_wrap_respon > p > a.next_n").click()
            time.sleep(3)
    except Exception as e:
        return job_dict