import React, { useState } from 'react';

export function Menerimahook({count}) {
  // Declare a new state variable, which we'll call "count"

  return (
    <div>
      <p>JUMLAH KLIK : {count}</p>
    </div>
  );
}