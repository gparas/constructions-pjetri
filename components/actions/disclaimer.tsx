const Disclaimer = () => {
  return (
    <p className="text-sm text-gray-500">
      Πατώντας Υποβολή, αποδέχεστε τους{" "}
      <a href="/terms-and-conditions/" className="text-dark-2" target="_blank">
        <u>Όροι Χρήσης</u>
      </a>{" "}
      και την{" "}
      <a href="/privacy-policy/" className="text-dark-2" target="_blank">
        <u>Πολιτική Απορρήτου</u>
      </a>
      .
    </p>
  );
};

export default Disclaimer;
