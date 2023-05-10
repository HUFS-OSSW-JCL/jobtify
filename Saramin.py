from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
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
    job_list = driver.find_elements(By.CLASS_NAME, "job_tit")
    for job in job_list:
        print(job.text)

