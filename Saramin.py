import Crawl_Function
from selenium import webdriver
from selenium.webdriver.common.by import By


def SearchJob(keyword):
    saramin = Crawl_Function.Crawler("https://www.saramin.co.kr/zf_user/")
    saramin.OpenSite()
    saramin.Search(keyword,"//*[@id=\"sri_header\"]/div[1]/div[1]", "//*[@id=\"ipt_keyword_recruit\"]")
    saramin.driver.find_elements(By.XPATH, "//*[@id=\"content\"]/ul[1]/li[2]/a").click()
    job_lists = saramin.GetJobInfo("#recruit_info_list > div.content", "div")
    for job in job_lists:
        job_title = job.find_element(By.CSS_SELECTOR, "div.area_job > h2")
        job_company = job.find_element(By.CSS_SELECTOR, "div.area_corp > strong")
        saramin.job_list.append([job_title.text, job_company.text])

    return saramin.job_list
