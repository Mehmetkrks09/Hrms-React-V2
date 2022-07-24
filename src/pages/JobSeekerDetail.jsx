import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";
import JobSeekerService from "../Services/jobSeekerService";

export default function JobSeekerDetail() {
  // let { id } = useParams();

  const [jobSeekers, setJobSeeker] = useState({});

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getById(4)
      .then((result) => setJobSeeker(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://lh3.googleusercontent.com/ogw/AOh-ky1oGsXh-FMuz3p2DEeKAdwWpqcxPQ11jUwFb3cu2yw=s32-c-mo"
            />

            <Card.Header>{jobSeekers.firstName}</Card.Header>
            <Card.Meta>{jobSeekers.lastName}</Card.Meta>
            <Card.Description>
            <strong> Mehmet</strong> Size iş Teklifi Gönderdi
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Onayla
              </Button>
              <Button basic color="red">
                Reddet
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
