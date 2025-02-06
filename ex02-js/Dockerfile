# Base Image
FROM nginx:latest

# 이미지 메타데이터
LABEL maintainer="HMKDT7 <ybsm0629@gmail.com>"
LABEL description="이것은 nginx로 정적 웹 배포 연습을 위한 이미지입니다."

# 컨텐츠를 제공 가능하게 복사
COPY . /usr/share/nginx/html

# 외부로 노출할 포트
EXPOSE 80

# 컨테이너 시작시 수행할 명령어
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
# ENTRYPOINT + CMD 조합