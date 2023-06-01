import Crawl_Function
import time
from selenium.webdriver.common.by import By

def SearchJob(keyword, area):
    rallit = Crawl_Function.Crawler("https://www.rallit.com/")
    rallit.OpenSite()
    rallit.driver.implicitly_wait(10)
    rallit.Search(keyword, "//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input","//*[@id=\"__next\"]/main/div/section[1]/div/div/form/input")
    time.sleep(2)
  

    """
    지역으로 필터를 걸어 검색
    """
    rallit.Click_By_CSS_SELECTOR("#__next > main > div > section.css-1kvjres > div > div > div > div > div > div > div > section.css-79elbk > div.css-c0mi9i")


    """
    경력으로 필터를 걸어서 검색
    """
    rallit.Click_By_CSS_SELECTOR("#__next > main > div > section.css-1kvjres > div > div > div > div > div > div > div > section.css-79elbk > div.css-7jdmb8 > div > div:nth-child(1) > ul > li:nth-child(4) > label")
    rallit.Click_By_CSS_SELECTOR("#__next > main > div > section.css-1kvjres > div > div > div > div > div > div > div > section.css-79elbk > div.css-7jdmb8 > div > div:nth-child(1) > ul > li:nth-child(5) > label")
    rallit.Click_By_CSS_SELECTOR("#__next > main > div > section.css-1kvjres > div > div > div > div > div > div > div > section.css-79elbk > div.css-7jdmb8 > div > div:nth-child(1) > ul > li:nth-child(6) > label")


    rallit.Area_Filter(area, "//*[@id=\"__next\"]/main/div/section[1]/div/div/div/div/div/div/div/section[2]/div[2]/div/div[3]/ul", "li", " ")

    a = rallit.driver.find_element(By.CSS_SELECTOR, "#__next > main > div > section.css-1xvi5b5 > ul")
    job_lists = a.find_elements(By.TAG_NAME, "a")
    """
    검색한 결과를 가져오는 코드
    """
    jobs = []

    try:
        for job in job_lists:
            job_dict = {}
            job_title = job.find_element(By.CLASS_NAME, "summary__title.css-5g43jj")
            job_company = job.find_element(By.CLASS_NAME, "summary__company-name.css-x5ccem")
            job_link = job.get_attribute("href")
            job_dict['공고명'] = job_title.text
            job_dict['회사명'] = job_company.text
            job_dict['링크'] = job_link
            jobs.append(job_dict)
    except Exception:
        pass
    return jobs