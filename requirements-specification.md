# RentX - Software Requirements Specification

## Car registration

**Functional Requirements**

1. Should be able to register a new car;
2. Should be able to list all categories.

**Business Rules**

1. Should NOT be able to register a car with an existing license plate;
2. Should NOT be able to change a license plate of an existing car;
3. Should register a car with available by default;
4. Only admin users can register a car.

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

1. Should be able to register a specification to a car;
2. Should be able to list all specifications;
3. Should be able to list all cars.

**Business Rules**

1. Should NOT be able to register a specification for an non-existent car;
2. Should NOT be able to register an already existing specification for the same car;
3. Only admin users can register a specification.

## Car images registration

**Functional Requirements**

1. Should be able to register a car image;
2. Should be able to list all cars;

**Non-functional Requirements**

1. Use multer for file upload.

**Business Rules**

1. Should be able to register more than one image for the same car;
2. Only admin users can register a car image.

## Car rental

**Functional Requirements**

1. Should be able to register a rental;

**Non-functional Requirements**

**Business Rules**

1. The rental must have a minimum duration of 24 hours (1 day);
2. Should NOT be able to register a new rental if there is already a rental open for the same user;
3. Should NOT be able to register a new rental if there is already a rental open for the same car.
