import Crawl_Function
import time
from selenium.webdriver.common.by import By

def SearchJob(keyword):
    jumpit = Crawl_Function.Crawler("https://www.jumpit.co.kr/")
    jumpit.OpenSite()
    jumpit.Search(keyword, "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input", "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input")
    time.sleep(3)

    #지역 필터링
    jumpit.driver.find_element(By.XPATH, "//*[@id=\"root\"]/main/div/div/div/div[1]/div[4]/button/span").click()
    time.sleep(0.5)
    a = jumpit.driver.find_element(By.CSS_SELECTOR, "#root > main > div > div > div > div.sc-dGXBhE.diLjdZ > div:nth-child(4) > div.sc-gHjyzD.iItVuO > div.layer_contents > div > div > div > ul:nth-child(1)")
    b = a.find_elements(By.TAG_NAME, "button")
    time.sleep(1)
    try:
        for c in b:
            if c.text in "서울 중구":
                c.click()
    except Exception as e:
        pass
    time.sleep(1)
    d = jumpit.driver.find_element(By.CSS_SELECTOR, "#root > main > div > div > div > div.sc-dGXBhE.diLjdZ > div:nth-child(4) > div.sc-gHjyzD.iItVuO > div.layer_contents > div > div > div > ul:nth-child(2)")
    e = d.find_elements(By.CSS_SELECTOR, "li")
    try:
        for f in e:
            if f.text in "서울 중구":
                f.click()
    except Exception:
        pass
















    #크롤링해오는 부분
    # try:
    #     job_lists = jumpit.GetJobInfo("#root > main > div > section.sc-gXRojI.lnTxpv > section", "div")
    #     job_dict = jumpit.ReturnList(job_lists, "a > div.sc-gUQvok.iPhfkg > h2", "a > div.sc-gUQvok.iPhfkg > div", " ", "a")
    # except Exception as e:
    #     pass
    # return job_dict