from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from fake_useragent import  UserAgent
import time

def SearchJob(keyword):
    job_list = []
    options = Options()
    url = "https://www.jumpit.co.kr/"
    userAgent = UserAgent()
    options.add_argument(f"user-agent = {userAgent.random}")
    driver = webdriver.Chrome()
    driver.maximize_window()
    driver.get(url)
    time.sleep(5)
    search = driver.find_element(By.XPATH, "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input")
    search.click()
    time.sleep(2)
    search.send_keys(keyword)
    time.sleep(2)
    search.send_keys(Keys.RETURN)
    time.sleep(5)
    list = driver.find_element(By.CSS_SELECTOR, "#root > main > div > section.sc-fydGpi.hIHIfr")
    jobs = list.find_elements(By.CSS_SELECTOR, "section > div")
    for job in jobs:
        try:
            #job_title = job.find_element(By.TAG_NAME, "h2")
            job_title = job.find_element(By.CSS_SELECTOR, "a > div.sc-gUQvok.iPhfkg > h2")
            job_company = job.find_element(By.CSS_SELECTOR, "a > div.sc-gUQvok.iPhfkg > div > span")
            job_list.append([job_title.text, job_company.text])
        except Exception as e:
            pass
    return job_list