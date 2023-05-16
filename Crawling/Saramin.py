import Crawl_Function
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def SearchJob(keyword):
    saramin = Crawl_Function.Crawler("https://www.saramin.co.kr/zf_user/")
    saramin.OpenSite()
    saramin.Search(keyword,"//*[@id=\"sri_header\"]/div[1]/div[1]", "//*[@id=\"ipt_keyword_recruit\"]")
    saramin.driver.find_element(By.XPATH, "//*[@id=\"content\"]/ul[1]/li[2]/a").click()
    time.sleep(5)
    saramin.GetJobInfo("#recruit_info_list > div.content", "div")
    saramin.ReturnList("div.area_job > h2", "div.area_corp > strong", "div.area_job > div.job_date > span", "div.area_job > h2 > a")

    return saramin.job_list
