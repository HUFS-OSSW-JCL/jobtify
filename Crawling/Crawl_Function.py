from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


class Crawler:
    """
    기본적인 크롬웹드라이버 설정
    """
    def __init__(self, url):
        self.job_list = []
        self.options = Options()
        self.url = url
        #self.options.add_argument("--window-size = 1920, 1080")
        self.driver = webdriver.Chrome(chrome_options=self.options)

    """
    처음에 클래스를 만들 때 인자로 받은 url을 여는 함수
    """

    def OpenSite(self):
        self.driver.set_window_size(1920, 1080)
        self.driver.get(self.url)
        time.sleep(1)

    """
    키워드를 입력받고, 검색하는 함수로, 검색창의 xpath를 가져와 클릭하고, 키워드를 입력한 다음에 엔터를 누르는 동작으로 이루어져 있음
    """

    def Search(self, keyword, button_x_path, input_x_path):
        self.driver.find_element(By.XPATH, button_x_path).click()
        time.sleep(1)
        self.driver.find_element(By.XPATH, input_x_path).send_keys(keyword)
        time.sleep(1)
        self.driver.find_element(By.XPATH, input_x_path).send_keys(Keys.RETURN)
        time.sleep(2)

    """
    검색한 페이지에서 채용공고만 추출
    """

    def GetJobInfo(self, contents_css_selector, joblists_css_selector):
        self.all_contents = self.driver.find_element(By.CSS_SELECTOR, contents_css_selector)
        self.all_lists = self.all_contents.find_elements(By.CSS_SELECTOR, joblists_css_selector)
        return self.all_lists

    """
    GetJobInfo함수를 통해 가져온 채용공고 리스트에서 공고명, 모집회사명, 모집기간, 세부정보를 볼 수 있는 링크를 딕셔너리에 저장하고, 만들어진 딕셔너리를 리스트에 담아서 리턴
    """

    def ReturnList(self, job_lists, job_title_selector, job_company_selector, job_during_selector,
                   job_link_selector):
        try:
            for jobs in job_lists:
                job_dict = {}
                try:
                    job_title = jobs.find_element(By.CSS_SELECTOR, job_title_selector)
                    job_company = jobs.find_element(By.CSS_SELECTOR, job_company_selector)
                    job_link = jobs.find_element(By.CSS_SELECTOR, job_link_selector).get_attribute("href")
                    job_dict['공고명'] = job_title.text
                    job_dict['회사명'] = job_company.text
                    job_dict['링크'] = job_link
                    try:
                        job_during = jobs.find_element(By.CSS_SELECTOR, job_during_selector)
                        job_dict['모집기간'] = job_during.text
                    except Exception as e:
                        pass
                    self.job_list.append(job_dict)
                except Exception as e:
                    pass
        except Exception:
            return
        return self.job_list

    """
    지역을 입력받아 입력받은 지역만 선택하고 검색하기 위한 필터설정 함수
    """
    def Area_Filter(self, area_keyword_list, area_XPATH, area_CSS_SELECTOR, BUTTON):
        area_element = self.driver.find_element(By.XPATH, area_XPATH)
        area_elements = area_element.find_elements(By.CSS_SELECTOR, area_CSS_SELECTOR)
        for area_keyword in area_keyword_list:
            for area in area_elements:
                if area.text in area_keyword:
                    area.click()
            time.sleep(1)
        try:
            self.driver.find_element(By.XPATH, BUTTON).click()
            time.sleep(1)
        except Exception:
            pass




    """
    스크롤을 끝까지 내리는 함수
    """
    def Scroll(self):
        last_height = self.driver.execute_script("return document.body.scrollHeight")
        while True:
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            time.sleep(2.5)
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height



    def Click_By_CSS_SELECTOR(self, css):
        self.driver.find_element(By.CSS_SELECTOR, css).click()
        time.sleep(0.5)
    def Click_By_XPATH(self, XPATH):
        self.driver.find_element(By.XPATH, XPATH).click()
        time.sleep(0.5)
    def Click_By_CLASS_NAME(self, classname):
        self.driver.find_element(By.CLASS_NAME, classname).click()
        time.sleep(0.5)