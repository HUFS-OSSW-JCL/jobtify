from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
    job_list = []
    options = Options()
    url = "https://www.jobkorea.co.kr/"
    userAgent = UserAgent()
    options.add_argument(f"user-agent = {userAgent.random}")
    driver = webdriver.Chrome()
    driver.get(url)
    time.sleep(5)
    driver.find_element(By.XPATH, "//*[@id=\"stext\"]").click()
    time.sleep(2)
    driver.find_element(By.XPATH, "//*[@id=\"stext\"]").send_keys(keyword)
    time.sleep(2)
    driver.find_element(By.XPATH, "//*[@id=\"common_search_btn\"]").click()
    time.sleep(5)
    element = driver.find_element(By.CSS_SELECTOR, "#content > div > div > div.cnt-list-wrap > div > div.recruit-info > div.lists > div > div.list-default > ul ")
    job_lists = element.find_elements(By.TAG_NAME, "li")
    for job in job_lists:
        job_title = job.find_element(By.CSS_SELECTOR, "div > div.post-list-info > a")
        job_company = job.find_element(By.CSS_SELECTOR, "div > div.post-list-corp > a")
        job_list.append([job_title.text, job_company.text])
    return job_list
