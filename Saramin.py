from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
    job_list = []
    options = Options()
    url = "https://www.saramin.co.kr/zf_user/"
    userAgent = UserAgent()
    options.add_argument(f"user-agent = {userAgent.random}")
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(5)
    driver.find_element(By.XPATH, "//*[@id=\"btn_search\"]").click()
    time.sleep(2)
    driver.find_element(By.XPATH, "//*[@id=\"ipt_keyword_recruit\"]").send_keys(keyword)
    time.sleep(2)
    driver.find_element(By.XPATH, "//*[@id=\"btn_search_recruit\"]").click()
    time.sleep(5)
    driver.find_element(By.XPATH, "//*[@id=\"content\"]/ul[1]/li[2]/a").click()
    time.sleep(5)
    all_contents = driver.find_element(By.CSS_SELECTOR, "#recruit_info_list > div.content")
    job_info = all_contents.find_elements(By.CSS_SELECTOR, "div")
    for job in job_info:
        job_title = job.find_element(By.CSS_SELECTOR, "div.area_job > h2")
        job_company = job.find_element(By.CSS_SELECTOR, "div.area_corp > strong")
        job_list.append([job_title.text, job_company.text])

    return job_list
