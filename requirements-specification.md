# RentX - Software Requirements Specification

## Car registration

**Functional Requirements**

1. Should be able to register a new car.

**Business Rules**

1. Should NOT be able to register a car with an existing license plate;
2. Should register a car with available by default;
3. Only admin users can register a car.

## Car listing

**Functional Requirements**

1. Should be able to list all available cars;
2. Should be able to list all available cars by category name;
3. Should be able to list all available cars by brand name;
4. Should be able to list all available cars by car name.

**Business Rules**

1. The user does not need to be logged in to see the list of available cars.

## Car specification registration

**Functional Requirements**

1. Should be able to register a specification to a car.

**Business Rules**

1. Should NOT be able to register a specification for an non-existent car;
2. Should NOT be able to register an already existing specification for the same car;
3. Only admin users can register a specification.

## Car images registration

**Functional Requirements**

1. Should be able to register a car image.

**Non-functional Requirements**

1. Use multer for file upload.

**Business Rules**

1. Should be able to register more than one image for the same car;
2. Only admin users can register a car image.

## Car rental

**Functional Requirements**

1. Should be able to register a rental;

**Business Rules**

1. The rental must have a minimum duration of 24 hours (1 day);
2. Should NOT be able to register a new rental if there is already a rental open for the same user;
3. Should NOT be able to register a new rental if there is already a rental open for the same car;
4. The user must to be logged into the application;
5. When a rental is made, the car's status must be changed to unavailable.

## Car return

**Functional Requirements**

1. Should be able to return a car;

**Business Rules**

1. If the car was returned in less than 24 hours, the full day will be charged;
2. After return, the car must be released for another rental;
3. After the return, the user must be released for another rental;
4. After the return, the total rent must be calculated;
5. If the return date is later than the estimated delivery date, a fine will be charged proportional to the days of delay;
6. If there is a fine, it must be added to the total rent;
7. The user must to be logged into the application.
