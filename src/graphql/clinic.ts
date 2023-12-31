import { gql } from '@apollo/client'

export const GET_MY_EMPLOYEES = gql`
  query GetMyEmployees {
    getMyEmployees {
      ClinicEmployees {
        id_employee
        status
        Employee {
          names
          surnames
          image
          email
          address
          telephone_number
          VeterinarianSummaryScore {
            total_points
            total_users
          }
          VeterinariaSpecialties {
            specialties
          }
        }
      }
    }
  }
`

export const GET_MY_CLINIC = gql`
  query {
    getMyClinic {
      id
      id_owner
      name
      telephone_number
      google_maps_url
      address
      created_at
      updated_at
      status
    }
  }
`

export const GET_ALL_EMPLOYEES = gql`
  query ($getAllEmployeeByClinicIdInput: GetAllEmployeeByClinicIdInput!) {
    getAllEmployee(
      getAllEmployeeByClinicIdInput: $getAllEmployeeByClinicIdInput
    ) {
      id_clinic
      id_employee
      employee_invitation_status
      created_at
      updated_at
      status
      employee {
        names
        surnames
        image
        email
        status
      }
    }
  }
`

export const GET_ALL_CLIENTS = gql`
  query {
    getAllClients {
      id_user
      id_clinic
      favorite
      points
      created_at
      updated_at
      status
      User {
        id
        names
        surnames
        email
        provider
        document
        address
        telephone_number
        image
        role
        created_at
        updated_at
        status
      }
    }
  }
`
