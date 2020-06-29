# Momentum - Clone coding

todoWEB(feat-Momentum) written in JavaScript

## features
	1. realtime clock
	2. save username, todo list in localStorage
	3. favicon
	4. QR code(github.io link url)


### edit 20/06/28

기존에 발생했던 문제는 두가지 원인이 문제였다.

	1. 함수 호출 과정에서 li태그 생성 함수가 반복적으로 들어가 있었다.
	2. 기존 li태그들 초기화 없이 처음부터 li태그들이 중복적으로 작성되었다.

두가지 문제점을 해결하고 삭제버튼에 기능을 추가하였다.

이 다음에는 위치기반서비스를 추가할 예정이다.

+ localStorage에 아무값도 없을시 발생하는 문제 수정!
