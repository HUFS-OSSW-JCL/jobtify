from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from fake_useragent import UserAgent
import time

class Crawler:
    #크롬 웹드라이버 설정
    def __init__(self, url):
        self.job_list = []
        self.options = Options()
        self.url = url
<<<<<<< HEAD
        self.ua = UserAgent()
        # self.ua.random
        # self.options.add_argument(f'user-agent = {self.ua}')
        self.options.add_argument("window-size=1920,1080")
        self.options.add_argument("--headless")
        #self.options.add_argument('--no-sandbox')
        # self.options.add_argument('--ignore-certificate-errors')
        # self.options.add_argument('--allow-running-insecure-content')
        #self.options.add_argument('--disable-dev-shm-usage')
        #self.options.add_argument("'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'")
        self.driver = webdriver.Chrome(chrome_options=self.options)
    """
    처음에 클래스를 만들 때 인자로 받은 url을 여는 함수
    """
    def OpenSite(self):
        #self.driver.maximize_window()
=======
        #self.userAgent = UserAgent()
        #self.options.add_argument(f"user-agent = {self.userAgent.random}"
        self.options.add_argument('--start-maximized')
        #self.options.add_argument("--headless")
        self.driver = webdriver.Chrome('chromedriver', options= self.options)
    
    #처음에 클래스를 만들 때 인자로 받은 url을 여는 함수
    def OpenSite(self):
        # self.driver.maximize_window()
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9
        self.driver.get(self.url)
        time.sleep(1)
    
    #키워드를 입력받고, 검색하는 함수로, 검색창의 xpath를 가져와 클릭하고, 키워드를 입력한 다음에 엔터를 누르는 동작으로 이루어져 있음   
    def Search(self, keyword, button_x_path, input_x_path):
        self.driver.find_element(By.XPATH, button_x_path).click()
        time.sleep(1)
        self.driver.find_element(By.XPATH, input_x_path).send_keys(keyword)
        time.sleep(1)
        self.driver.find_element(By.XPATH, input_x_path).send_keys(Keys.RETURN)
        time.sleep(2)
    
    #검색한 페이지에서 채용공고만 추출
    def GetJobInfo(self, contents_css_selector, joblists_css_selector):
        self.all_contents = self.driver.find_element(By.CSS_SELECTOR, contents_css_selector)
        self.all_lists = self.all_contents.find_elements(By.CSS_SELECTOR, joblists_css_selector)
<<<<<<< HEAD
        return self.all_lists
    
    """
    GetJobInfo함수를 통해 가져온 채용공고 리스트에서 공고명, 모집회사명, 모집기간, 세부정보를 볼 수 있는 링크를 딕셔너리에 저장하고, 만들어진 딕셔너리를 리스트에 담아서 리턴
    """
    def ReturnList(self, job_lists, job_title_selector, job_company_selector, job_during_selector, job_link_selector):
        for jobs in job_lists:
=======
    
    
    #GetJobInfo함수를 통해 가져온 채용공고 리스트에서 공고명, 모집회사명, 모집기간, 세부정보를 볼 수 있는 링크를 딕셔너리에 저장하고, 만들어진 딕셔너리를 리스트에 담아서 리턴
    def ReturnList(self, job_title_selector, job_company_selector, job_during_selector, job_link_selector):
        for jobs in self.all_lists:
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9
            job_dict = {}
            try:
                job_title = jobs.find_element(By.CSS_SELECTOR, job_title_selector)
                job_company = jobs.find_element(By.CSS_SELECTOR, job_company_selector)
                job_link = jobs.find_element(By.CSS_SELECTOR, job_link_selector).get_attribute("href")
<<<<<<< HEAD
                # if job_during == None:
                #     job_link.click()
                #     time.sleep(3)
                #     job_during = jobs.find_element(By.CSS_SELECTOR, job_during_selector)
=======
>>>>>>> 5a0a6a6121d71cfdb7e33647efed6b11c9272df9
                job_dict['공고명'] = job_title.text
                job_dict['회사명'] = job_company.text
                job_dict['링크'] = job_link     
                try: #원티드는 링크를 타고 들어가서 세부 정보를 봐야 공고 기간을 알 수 있어서 try문으로 넘어가게 만듦
                    job_during = jobs.find_element(By.CSS_SELECTOR, job_during_selector)
                    job_dict['모집기간'] = job_during.text
                except Exception as e:
                    pass
                self.job_list.append(job_dict)
            except Exception as e:
                pass

        return self.job_list
    
    #스크롤을 내리고 1초동안 기다리는 함수
    def scroll_down(self,body):
        self.driver.find_element(By.CSS_SELECTOR, body).send_keys(Keys.PAGE_DOWN)
        time.sleep(1)
    
    #인자로 Css selector를 받고, 그걸 클릭한 후 0.5초 기다리는 함수(필터를 설정할때 쓰기 위해서 사용)
    def click(self, css):
        self.driver.find_element(By.CSS_SELECTOR, css).click()
        time.sleep(0.5)
