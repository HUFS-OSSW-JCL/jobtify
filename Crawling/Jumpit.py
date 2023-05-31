import Crawl_Function
import time
from selenium.webdriver.common.by import By

def SearchJob(keyword):
    jumpit = Crawl_Function.Crawler("https://www.jumpit.co.kr/")
    jumpit.OpenSite()
    """
    점핏 실행시 나오는 광고를 지움
    """
    try:
        jumpit.Click_By_CSS_SELECTOR("#modal > div > div > div.sc-ewSTlh.bkQpMn > button:nth-child(2)")
    except Exception:
        pass

    time.sleep(1)
    """
    키워드를 입력해 검색
    """
    jumpit.Search(keyword, "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input", "//*[@id=\"root\"]/header/div/nav[1]/div[2]/div/div/input")
    time.sleep(2)
    """
    "신입"경력을 요구하는 공고만 보기 위한 필터를 설정하는 부분
    """
    jumpit.Click_By_XPATH("//*[@id=\"root\"]/main/div/div/div/div[1]/div[3]/button")
    jumpit.Click_By_XPATH("//*[@id=\"root\"]/main/div/div/div/div[1]/div[3]/div[1]/div[2]/div/div/div[2]/label")

    """
    "지역"으로 필터링
    """
    jumpit.Click_By_XPATH("//*[@id=\"root\"]/main/div/div/div/div[1]/div[4]/button/span")

    area_element = jumpit.driver.find_element(By.XPATH, "//*[@id=\"root\"]/main/div/div/div/div[1]/div[4]/div[1]/div[2]/div/div/div")
    area_elements = area_element.find_elements(By.TAG_NAME, "button")
    time.sleep(1)
    try:
        for area in area_elements:
            if area.text in "서울 중구":
                area.click()
    except Exception:
        pass
    time.sleep(1)
    jumpit.Click_By_XPATH("//*[@id=\"root\"]/main/div/div/div/div[1]/div[4]/div[1]/div[3]/button[2]")

    """
    스크롤을 끝까지 내려줌
    """
    jumpit.Scroll()

    try:
        job_lists = jumpit.GetJobInfo("#root > main > div > section.sc-gXRojI.lnTxpv > section", "div")
        job_dict = jumpit.ReturnList(job_lists, "a > div.sc-gUQvok.iPhfkg > h2", "a > div.sc-gUQvok.iPhfkg > div", " ", "a")
    except Exception as e:
        pass
    return job_dict