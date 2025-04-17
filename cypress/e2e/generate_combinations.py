from itertools import product

# 전역 변수로 조합 번호 관리
combination_counter = 0

def drm_h264_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['DRM'],
        '입력파일': ['H264', 'H265', 'ProRes', 'XDCAM', 'MKV'],
        '비율옵션': ['체크'],
        '출력 코덱': ['H264'],
        '해상도': ['UHD+FHD+FHD+HD+HD+SD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS'],
        '오디오 트랙 암호화': ['체크', '체크해제'],
        '멀티 키' : ['체크', '체크해제'],
        '멀티 매니패스트' : ['체크', '체크해제'],
        'DRM 비활성화 구간' : ['설정', '미설정']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['비율옵션'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧'],
        options['오디오 트랙 암호화'],
        options['멀티 키'],
        options['멀티 매니패스트'],
        options['DRM 비활성화 구간']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/drm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  비율옵션: {combo[2]}\n")
            f.write(f"  출력 코덱: {combo[3]}\n")
            f.write(f"  해상도: {combo[4]}\n")
            f.write(f"  스트리밍 포멧: {combo[5]}\n")
            f.write(f"  오디오 트랙 암호화: {combo[6]}\n")
            f.write(f"  멀티 키: {combo[7]}\n")
            f.write(f"  멀티 매니패스트: {combo[8]}\n")
            f.write(f"  DRM 비활성화 구간: {combo[9]}\n")

def drm_h265_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['DRM'],
        '입력파일': ['H264', 'H265', 'ProRes', 'XDCAM', 'MKV'],
        '비율옵션': ['체크'],
        '출력 코덱': ['H265'],
        '해상도': ['UHD+FHD+HD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS'],
        '오디오 트랙 암호화': ['체크', '체크해제'],
        '멀티 키' : ['체크', '체크해제'],
        '멀티 매니패스트' : ['체크', '체크해제'],
        'DRM 비활성화 구간' : ['설정', '미설정']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['비율옵션'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧'],
        options['오디오 트랙 암호화'],
        options['멀티 키'],
        options['멀티 매니패스트'],
        options['DRM 비활성화 구간']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/drm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  비율옵션: {combo[2]}\n")
            f.write(f"  출력 코덱: {combo[3]}\n")
            f.write(f"  해상도: {combo[4]}\n")
            f.write(f"  스트리밍 포멧: {combo[5]}\n")
            f.write(f"  오디오 트랙 암호화: {combo[6]}\n")
            f.write(f"  멀티 키: {combo[7]}\n")
            f.write(f"  멀티 매니패스트: {combo[8]}\n")
            f.write(f"  DRM 비활성화 구간: {combo[9]}\n")

def drm_fwm_h264_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['DRM+FWM'],
        '입력파일': ['H264', 'H265'],
        '비율옵션': ['체크해제'],
        '출력 코덱': ['H264'],
        '해상도': ['UHD+FHD+HD','FHD+FHD+HD+SD+SD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS'],
        '오디오 트랙 암호화': ['체크', '체크해제'],
        '멀티 키' : ['체크', '체크해제'],
        '멀티 매니패스트' : ['체크', '체크해제'],
        'DRM 비활성화 구간' : ['설정', '미설정']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['비율옵션'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧'],
        options['오디오 트랙 암호화'],
        options['멀티 키'],
        options['멀티 매니패스트'],
        options['DRM 비활성화 구간']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/drm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  비율옵션: {combo[2]}\n")
            f.write(f"  출력 코덱: {combo[3]}\n")
            f.write(f"  해상도: {combo[4]}\n")
            f.write(f"  스트리밍 포멧: {combo[5]}\n")
            f.write(f"  오디오 트랙 암호화: {combo[6]}\n")
            f.write(f"  멀티 키: {combo[7]}\n")
            f.write(f"  멀티 매니패스트: {combo[8]}\n")
            f.write(f"  DRM 비활성화 구간: {combo[9]}\n")

def drm_fwm_h265_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['DRM+FWM'],
        '입력파일': ['H264', 'H265'],
        '비율옵션': ['체크해제'],
        '출력 코덱': ['H265'],
        '해상도': ['UHD+FHD+HD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS'],
        '오디오 트랙 암호화': ['체크', '체크해제'],
        '멀티 키' : ['체크', '체크해제'],
        '멀티 매니패스트' : ['체크', '체크해제'],
        'DRM 비활성화 구간' : ['설정', '미설정']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['비율옵션'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧'],
        options['오디오 트랙 암호화'],
        options['멀티 키'],
        options['멀티 매니패스트'],
        options['DRM 비활성화 구간']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/drm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  비율옵션: {combo[2]}\n")
            f.write(f"  출력 코덱: {combo[3]}\n")
            f.write(f"  해상도: {combo[4]}\n")
            f.write(f"  스트리밍 포멧: {combo[5]}\n")
            f.write(f"  오디오 트랙 암호화: {combo[6]}\n")
            f.write(f"  멀티 키: {combo[7]}\n")
            f.write(f"  멀티 매니패스트: {combo[8]}\n")
            f.write(f"  DRM 비활성화 구간: {combo[9]}\n")
            f.write("\n")  # 각 조합 사이에 빈 줄 추가

def fwm_h264_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['FWM'],
        '입력파일': ['H264','H265'],
        '출력 코덱': ['H264'],
        '해상도': ['UHD+FHD+HD','FHD+FHD+HD+SD+SD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/fwm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  출력 코덱: {combo[2]}\n")
            f.write(f"  해상도: {combo[3]}\n")
            f.write(f"  스트리밍 포멧: {combo[4]}\n")

def fwm_h265_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['FWM'],
        '입력파일': ['H264','H265'],
        '출력 코덱': ['H265'],
        '해상도': ['UHD+FHD+HD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/fwm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  출력 코덱: {combo[2]}\n")
            f.write(f"  해상도: {combo[3]}\n")
            f.write(f"  스트리밍 포멧: {combo[4]}\n")

def fwm_drm_h264_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['FWM'],
        '입력파일': ['H264','H265'],
        '출력 코덱': ['H264'],
        '해상도': ['UHD+FHD+HD','FHD+FHD+HD+SD+SD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS']
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/fwm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  출력 코덱: {combo[2]}\n")
            f.write(f"  해상도: {combo[3]}\n")
            f.write(f"  스트리밍 포멧: {combo[4]}\n")

def fwm_drm_h265_combinations():
    global combination_counter
    # 각 선택지 정의
    options = {
        '작업타입': ['DRM+FWM'],
        '입력파일': ['H264', 'H265'],
        '출력 코덱': ['H265'],
        '해상도': ['UHD+FHD+HD'],
        '스트리밍 포멧': ['CMAF','DASH+HLS'],
    } 
    
    # 모든 가능한 조합 생성
    combinations = list(product(
        options['작업타입'],
        options['입력파일'],
        options['출력 코덱'],
        options['해상도'],
        options['스트리밍 포멧']
    ))
    
    # 결과를 파일에 저장
    with open('cypress/e2e/fwm_combinations.txt', 'a', encoding='utf-8') as f:
        f.write(f"\n=== {options['작업타입'][0]} {options['출력 코덱'][0]} 조합 ===\n")
        f.write(f"총 조합 수: {len(combinations)}\n\n")
        for combo in combinations:
            combination_counter += 1
            f.write(f"조합 {combination_counter}:\n")
            f.write(f"  작업타입: {combo[0]}\n")
            f.write(f"  입력파일: {combo[1]}\n")
            f.write(f"  출력 코덱: {combo[2]}\n")
            f.write(f"  해상도: {combo[3]}\n")
            f.write(f"  스트리밍 포멧: {combo[4]}\n")

if __name__ == "__main__":
    # 파일 초기화
    with open('cypress/e2e/drm_combinations.txt', 'w', encoding='utf-8') as f:
        f.write("")
    with open('cypress/e2e/fwm_combinations.txt', 'w', encoding='utf-8') as f:
        f.write("")
    
    # DRM 조합 생성
    drm_h264_combinations()
    drm_h265_combinations()
    drm_fwm_h264_combinations()
    drm_fwm_h265_combinations()
    
    # FWM 조합 생성 (조합 번호 초기화)
    combination_counter = 0
    fwm_h264_combinations()
    fwm_h265_combinations()
    fwm_drm_h264_combinations()
    fwm_drm_h265_combinations()
    
    # 실제 조합 수 계산
    with open('cypress/e2e/drm_combinations.txt', 'r', encoding='utf-8') as f:
        drm_lines = f.readlines()
        drm_count = sum(1 for line in drm_lines if line.startswith('조합'))
    
    with open('cypress/e2e/fwm_combinations.txt', 'r', encoding='utf-8') as f:
        fwm_lines = f.readlines()
        fwm_count = sum(1 for line in fwm_lines if line.startswith('조합'))
    
    print("\n총 조합 수:")
    print(f"DRM 관련 총 조합 수: {drm_count}")
    print(f"FWM 관련 총 조합 수: {fwm_count}")
    
    print("\n모든 조합이 combinations.txt 파일에 저장되었습니다.")

