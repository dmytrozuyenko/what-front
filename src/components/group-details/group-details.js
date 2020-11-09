import React from 'react';
import propTypes from 'prop-types';
import { Badge, Table } from 'react-bootstrap';

/**
 * @param group {object} Information about group
 * @param group.name {string}
 * @param group.courseId {number} Course id which bind with this group
 * @param group.startDate {string}
 * @param group.finishDate {string}
 * @param group.studentIds {array} List of students ids which bind with this group
 *
 * @param mentors {array} List of objects with information about mentors assigned to this group
 * @param mentors.firstName
 * @param mentors.lastName
 */
export const GroupDetails = ({ group, mentors }) => {
  /**
   * These students just are mocks,
   * later here should be making requests
   * or getting data from the store
   */
  const students = { ...group }.studentIds.map((id) => ({
    id,
    firstName: 'Name',
    lastName: 'Surname',
  }));

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-sm-8 card shadow p-4">
          <div className="d-flex flex-column mb-4 text-center">
            <h2>
              {`Group: ${group.name}`}
            </h2>
            <p>
              {`${group.startDate} - ${group.finishDate}`}
            </p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <p className="h4 m-0 pr-2">
              Mentors:
            </p>
            <div className="d-flex">
              { mentors.map(({ firstName, lastName, id }) => (
                <div className="pr-2" key={id}>
                  <Badge pill variant="warning">
                    {`${firstName} ${lastName}`}
                  </Badge>
                </div>
              )) }
            </div>
          </div>
          <div className="d-flex justify-content-between mt-2 mb-2">
            <p className="h4">
              {`Course: ${group.courseId}`}
            </p>
            <div>
              <a href="/" className="btn btn-warning mr-2">Edit</a>
              <a href="/" className="btn btn-danger">Delete</a>
            </div>
          </div>

          <p className="h4 mb-2">
            Students
          </p>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>№</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              { students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                </tr>
              )) }
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const GroupPropTypesInterface = propTypes.shape({
  name: propTypes.string,
  courseId: propTypes.number,
  startDate: propTypes.string,
  finishDate: propTypes.string,
  studentIds: propTypes.arrayOf(propTypes.number),
});

const MentorPropTypesInterface = propTypes.shape({
  firstName: propTypes.string,
  lastName: propTypes.string,
});

GroupDetails.propTypes = {
  group: GroupPropTypesInterface.isRequired,
  mentors: propTypes.arrayOf(MentorPropTypesInterface).isRequired,
};