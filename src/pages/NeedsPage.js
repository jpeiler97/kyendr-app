import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route } from "../utils/config";
import NeedCard from "../components/NeedCard";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { animated, useTransition } from "react-spring";
function NeedsPage() {
  const [needs, setNeeds] = useState({
    needs: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  // const transNeeds = useTransition(needs, (needs) => needs, {
  //   from: { opacity: 0, transform: "translateY(-100px)" },
  //   enter: { opacity: 1, transform: "translateY(0px)" },
  //   leave: { opacity: 0, transform: "translateY(100px)" },
  //   config: {
  //     duration: 750,
  //   },
  // });

  useEffect(() => {
    getNeeds();
  }, []);

  const getNeeds = () => {
    let store = JSON.parse(localStorage.getItem("login"));
    axios
      .get(`${Route}/Provider/GetOpenOpportunities?daysOut=60`, {
        headers: { Authorization: `Bearer ${store.token}` },
      })
      .then((res) => {
        setIsLoading(false);
        setNeeds(res.data);
      })
      .catch((err) => console.log(err));
  };

  const Commit = (id) => (e) => {
    e.stopPropagation();
    e.preventDefault();

    let store = JSON.parse(localStorage.getItem("login"));

    axios
      .post(
        `${Route}/Provider/Commit`,
        {
          needId: id,
          count: 1,
        },
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      )
      .then((res) => {
        setNeeds(needs.filter((x) => x.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : needs.length > 0 ? (
        <Grid container direction="column" spacing={2}>
          {needs.map((need) => {
            return (
              <NeedCard
                key={need.id}
                id={need.id}
                title={need.title}
                description={need.description}
                details={need.details}
                date={need.commitmentDate}
                Commit={Commit}
              ></NeedCard>
            );
          })}
        </Grid>
      ) : (
        <div className="no-commitments">
          <h2>No Opportunities Available</h2>
        </div>
      )}
    </div>
  );
}

export default NeedsPage;
