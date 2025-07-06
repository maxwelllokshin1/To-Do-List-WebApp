# Design Document: To-Do List Web App

Author: Maxwell Lokshin

Date: 06/22/2025

Status: Draft

## 1. **Overview**

Build a simple To-Do List Web application using **React**, **TypeScript**, and **localStorage**. This app will allow users to add new tasks, remove old tasks, update current tasks, and mark them complete.


## 2. **Problem Statement**

Users want to have a way to log tasks to do locally in their browser without signing up or relying on paywall websites. Most solutions out there have you log in with an account.


## 3. **Goals**
```
   - ✅Add tasks
   - ✅Delete Tasks
   - ✅Update Tasks
   - ✅Mark tasks complete
   - ✅Use concepts such as localStorage
   - ✅Simple UI
   - ✅Filter tasks Active | Completed
   - ✅Delete all tasks
```

## 4. **Non-Goals**
```
   - ❌ Multi-user support
   - ❌ Cloud sync or authentication
   - ❌ Mobile app
```

## 5. **Technical Design**

#### 5.1 **Tech Stack**

| Layer | Tool |
| ------------- | ------------- |
| Frontend | React |
| Styling | CSS |
| Stroage | Browser |

#### 5.2 Component Breakdown
```
<App />
 ├── <Header />
	└── <Filters />
	└── <Alert />
	└── <Delete All />
 ├── <TodoInput />
 ├── <TodoList />
       └── <TodoItem />

```

#### 5.3 State Management
	- ✅Using useState and useEffect:
	- ✅Array of Todo objects
	- ✅Filter: “all” | “active” | “complete”
## 6. Tradeoffs and Considerations
 
| Decision | Reason |
| ------------- | ------------- |
| LocalStorage vs Indexed DB | Simple, fast, small-scale data |
| No third-party state manager | Unnecessary complexity for small app |


## 7. Testing Plan
```
   - ✅Manual testing in Chrome
   - ❌Adding data-testid attributes for future unit testing
   - ✅Confirm localStorage behavior on refresh
```

## 8. Timeline

| Task | Time |
| ------------- | ------------- |
| Design Document | 1 - 2 hours |
| Setup project | 1 - 2 hours |
| Build components | 0.5 day |
| Testing | 3 hours |
| Local Storage | 0.5 day |
| Testing | 3 hours |
| Styling + polish | 0.5 day |
| Final testing | 3 hours |

## 9. Appendix
Sources: [Bootstrap](https://getbootstrap.com/)
