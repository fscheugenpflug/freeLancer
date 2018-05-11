# Userstory

Dummy build with ionic creator --> https://creator.ionic.io/app/designer/39efedecc927

# Routes

  ## Provider

  ### Authentication 

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |post     |/p/auth/signup                   |creates new provider                                           |
  |post     |/p/auth/login                    |creates new provider-session                                   |
  |post     |/p/auth/logout                   |deletes current session                                        |
  |get      |/p/auth/me                       |retrieves data about current user                              |

  ### Setup Profile

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |post     |/p/:id/setup-profile/info        |adds general information about Provider                        |
  |post     |/p/:id/setup-profile/picture     |deletes current session                                        |
  |post     |/p/:id/setup-profile/location    |creates new provider-session                                   |

  ### App

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |get      |/p/profile                       |provider will be shown profile                                 |
  |post     |/p/profile                       |provider will be able to update profile                        |
  |get      |/p/deals                         |provider will see upcoming/bygone deals                        |
  |get      |/p/deals/:idDeal                 |provider will see deal details                                 |
  |post     |/p/deals/:idDeal/sign            |costumer will be able to finalize contract here                |
  |get      |/p/pending                       |provider will see pending deals                                |
  |get      |/p/pending/:idDeal               |provider will see pending deal details                         |
  |post     |/p/pending/:idDeal               |provider will accept/decline pending deal                      |

  ## Customer   

  ### Authentication    

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |post     |/c/auth/signup                   |creates new customer                                           |
  |post     |/c/auth/login                    |creates new customer-session                                   |
  |post     |/c/auth/logout                   |deletes current session                                        |
  |get      |/c/auth/me                       |retrieves data about current user                              |

  ### App

  Method    |Routes                           |What does it do?                                               |
  |:--------|:--------------------------------|:--------------------------------------------------------------|
  |get      |/c/home                          |customer will see all available categories                     |
  |get      |/c/:category                     |customer will see all available providers within one category  |
  |get      |/c/:category/:id                 |customer will see providers profile                            |
  |post     |/c/:category/:id                 |customer will be able to make request                          |
  |post     |/c/request/:id/info              |customer will be able to make request                          |
  |post     |/c/request/:id/payment           |add creditcard to job                                          |
  |get      |/c/:id/requestsubmit             |customer sees submit completion                                |
  |get      |/c/deals                         |costumer will see upcoming/bygone deals                        |
  |get      |/c/deals/:idDeal                 |costumer will see deal details                                 |
  |get      |/c/pending/:idDeal               |custumer will see pending deal details                         |
  |post     |/c/pending/:idDeal               |custumer will accept/decline pending deal                      |
 
 ------------------------------------------------------------------------------
# Models

## User

```javascript
User = {
  role: String,
   required: true,  
  name: String,
   required: true,
  surname: String,
   required: true,  
  email: String,
   required: true,   
   unique: true,
  password: String 
  required: true,
  profession: String,
  address: String,
  telephone: Number
  }
```

## Deal

```javascript
deal = {
  dealInfo: String, required: true,
  picture: 'file',
  date: String, required: true
}
```

## Payment

```javascript
card = {
}
```
------------------------------------------------------------------------------
## 1. Views 
  ### 1.1 common
  - SignUp (radio -> customer/provider)
  - Login
  - Profile
  - Deals [upcoming & bygone]
  - Deals pending (only decline)
  
  ### 1.2 Provider
  - SetUp
  - Deals pending (decline & accept)
  - eSign

  ### 1.3 Customer 
  - Overview categories
  - Providers within category
  - Request (Info & Picture & Calendar & Payment)
  - Requst received
  - Requst confirmed (pop up message)

------------------------------------------------------------------------------
## 2 Components 
  ### 2.1 Common
  - SignUp form 
  - Login form
  - Profile 
  - Deals including conditional (approved / upcoming / bygone)
  
  ### 2.2 Provider
  - SetUp form 
  - Deals pending (decline & accept)
  - eSign form

  ### 2.3 Customer 
  - Request form
  - Request received
  - Request confirmed (pop up message)

------------------------------------------------------------------------------

## 3 Service 

  - authService 
  - requestServcie
  - (payService) 
  - (eSignService)

  
