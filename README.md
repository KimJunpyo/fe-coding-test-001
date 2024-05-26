# Fe Coding Test 0001

## 과제: 간단한 Todo List 애플리케이션 만들기

React를 사용하여 간단한 Todo List 애플리케이션을 만드세요. \
이 애플리케이션은 사용자가 작업을 추가, 보기, 제거할 수 있도록 해야 합니다. \
이 과제는 React 컴포넌트, 상태 관리, 이벤트 처리 능력에 중점을 둡니다.

## 진행 과정
1. 코드 검토
2. 빈 레포를 개인 기트헙에 생성 후
3. 30분 이내에 아래 코드 구현
4. 종료 후 코드 공유

## 기술 스택 요구사항

1. React
2. Typescript
3. 아무 상태 관리


## 기능 요구 사항

1. **작업 생성 기능**
    - [ ] 사용자가 새로운 작업을 생성할 수 있는 기능이 있어야됩니다.
    - [ ] 입력 필드 옆에 "작업 추가" 버튼이 있어 입력된 작업을 목록에 추가할 수 있어야 합니다.
2. **작업 목록 기능**
    - [ ] 입력 필드와 버튼 아래에 작업 목록을 표시하세요.
    - [ ] 각 작업은 그 옆에 "제거" 버튼과 함께 표시되어야 합니다.
3. **작업 삭제 기능**
    - [ ] 작업 옆의 "삭제" 버튼을 클릭하면 해당 작업이 목록에서 제거되어야 합니다.
4. **작업 초기화 기능**
    - [ ] 상단에 초기화라는 버튼이 있어야됩니다
    - [ ] 애플리케이션은 빈 작업 목록으로 시작해야 합니다.
5. **작업 상태 변경 기능**
    - [ ] 아이템 목록에 있는 아이템 상태 변경을 할 수 있어야됩니다.
    - [ ] 상태는 미시작, 진행중, 완료가 있어야됩니다

## 예시 레이아웃

```
---------------------------------
| 입력 필드           | 작업 추가 버튼 |
---------------------------------
| 작업 1        | 제거 버튼      |
| 작업 2        | 제거 버튼      |
---------------------------------
```

## 제출

- 애플리케이션의 완성된 코드를 제공하세요.
- 코드가 잘 구조화되어 있고 이해하기 쉬운지 확인하세요.
- 필요한 경우 애플리케이션 실행 방법에 대한 지침을 포함하세요.

## 평가 기준

- 정확성: 애플리케이션이 요구 사항을 충족하는가?
- 코드 품질: 코드가 잘 구성되어 있고 읽기 쉬운가?
- 기능성: 애플리케이션이 예상대로 오류 없이 작동하는가?
- 보너스: 구현된 경우, 보너스 기능이 제대로 작동하는가?
- 테스트 케이스 통과: 밑에 해당되는 테스트 케이스는 모두 통과해야됩니다

## 테스트 케이스

아래는 간단한 Todo List 애플리케이션의 주요 기능을 검증하기 위한 테스트 케이스입니다. 각 테스트 케이스는 애플리케이션의 특정 동작을 확인하는 데 중점을 둡니다.

### 케이스 1: 작업 추가

**목표:** 사용자가 작업을 추가할 수 있는지 확인합니다.

**단계:**

1. 애플리케이션을 로드합니다.
2. 입력 필드에 "Buy groceries"를 입력합니다.
3. "작업 추가" 버튼을 클릭합니다.
4. 목록에 "Buy groceries" 작업이 추가되었는지 확인합니다.

**예상 결과:**

- "Buy groceries" 작업이 목록에 표시됩니다.

### 케이스 2: 작업 제거

**목표:** 사용자가 작업을 제거할 수 있는지 확인합니다.

**단계:**

1. 애플리케이션을 로드합니다.
2. 입력 필드에 "Buy groceries"를 입력하고 "작업 추가" 버튼을 클릭합니다.
3. 입력 필드에 "Clean the house"를 입력하고 "작업 추가" 버튼을 클릭합니다.
4. "Buy groceries" 작업 옆의 "제거" 버튼을 클릭합니다.
5. 목록에서 "Buy groceries" 작업이 제거되었는지 확인합니다.

**예상 결과:**

- "Buy groceries" 작업이 목록에서 사라집니다.
- "Clean the house" 작업은 목록에 남아 있습니다.

### 케이스 3: 초기 상태

**목표:** 애플리케이션이 초기 상태로 빈 작업 목록을 가지고 있는지 확인합니다.

**단계:**

1. 애플리케이션을 로드합니다.

**예상 결과:**

- 작업 목록이 비어 있습니다.

### 케이스 4: 완료된 작업 표시

**목표:** 사용자가 작업을 완료로 표시하고 완료된 작업이 다르게 표시되는지 확인합니다.

**단계:**

1. 애플리케이션을 로드합니다.
2. 입력 필드에 "Buy groceries"를 입력하고 "작업 추가" 버튼을 클릭합니다.
3. "Buy groceries" 작업 옆의 "완료" 버튼을 클릭합니다.
4. "Buy groceries" 작업이 완료된 것으로 표시되는지 확인합니다 (예: 취소선 적용).

**예상 결과:**

- "Buy groceries" 작업이 완료된 스타일(취소선 등)로 표시됩니다.