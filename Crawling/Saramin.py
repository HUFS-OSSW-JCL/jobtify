import Crawl_Function
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def SearchJob(keyword):
    saramin = Crawl_Function.Crawler("https://www.saramin.co.kr/zf_user/")
    saramin.OpenSite()

    saramin.Search(keyword,"//*[@id=\"btn_search\"]", "//*[@id=\"ipt_keyword_recruit\"]")
    saramin.click("#sp_main_wrapper > div.default_option > div.search_option.career_option > button")
    time.sleep(1)
    saramin.driver.find_element(By.CSS_SELECTOR, "#btn_check_career_over0").click()
    saramin.driver.find_element(By.CSS_SELECTOR, "#btn_check_career_over3").click()
    time.sleep(0.5)
    saramin.click("#search_btn")
    saramin.click("#content > ul.tab_search_result.on > li:nth-child(2) > a")
    saramin.driver.implicitly_wait(50)
    saramin.GetJobInfo("#recruit_info_list > div.content", "div")
    job_list = saramin.ReturnList("div.area_job > h2", "div.area_corp > strong", "div.area_job > div.job_date > span", "div.area_job > h2 > a")

    return job_list
