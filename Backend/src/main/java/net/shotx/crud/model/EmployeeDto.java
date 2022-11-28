package net.shotx.crud.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.io.Serializable;

/**
 * A DTO for the {@link Employee} entity
 */
@AllArgsConstructor
@Getter
public class EmployeeDto implements Serializable {
    private final long id;
    private final String firstName;
    private final String lastName;
    private final String email;
}