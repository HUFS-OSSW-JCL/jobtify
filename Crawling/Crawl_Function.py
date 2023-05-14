from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from fake_useragent import  UserAgent
import time

class Crawler:
    def __init__(self, url):
        self.job_list = []
        self.options = Options()
        self.url = url
        self.userAgent = UserAgent()
        self.options.add_argument(f"user-agent = {self.userAgent.random}")
        self.driver = webdriver.Chrome()

    def OpenSite(self):
        self.driver.maximize_window()
        self.driver.get(self.url)
        time.sleep(5)

    def Search(self, keyword, button_x_path, input_x_path):
        self.driver.find_element(By.XPATH, button_x_path).click()
        time.sleep(1)
        self.driver.find_element(By.XPATH, input_x_path).send_keys(keyword)
        time.sleep(1)
        self.driver.find_element(By.XPATH, input_x_path).send_keys(Keys.RETURN)
        time.sleep(5)

    def GetJobInfo(self, contents_css_selector, joblists_css_selector):
        self.all_contents = self.driver.find_element(By.CSS_SELECTOR, contents_css_selector)
        self.all_lists = self.all_contents.find_elements(By.CSS_SELECTOR, joblists_css_selector)
    
    def ReturnList(self, job_title_selector, job_company_selector):
        for jobs in self.all_lists:
            try:
                job_title = jobs.find_element(By.CSS_SELECTOR, job_title_selector)
                job_company = jobs.find_element(By.CSS_SELECTOR, job_company_selector)
                #job_link = jobs.find_element(By.CSS_SELECTOR, job_link_selector)
                self.job_list.append([job_title.text, job_company.text])
            except Exception as e:
                pass
        return self.job_list