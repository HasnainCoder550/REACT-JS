import React from 'react';

const UserCard = ({user}) => {
  // Aapka diya hua data object
  // const user = {
  //   "_id": "69fdf81b04b2e96e4f011879",
  //   "email": "codermhasan@gmail.com",
  //   "userName": "hasan",
  //   "age": 23,
  //   "otp": "e76b",
  //   "otpExpiry": "2026-05-08T15:00:01.740Z",
  //   "isVerified": false
  // };

  // // Date format karne ke liye helper
  // const expiryDate = new Date(user.otpExpiry).toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'short',
  //   day: 'numeric',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // });

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 my-8">
      {/* Upper Tech-styled Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24 relative">
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 bg-slate-800 rounded-2xl border-4 border-white flex items-center justify-center text-white text-3xl font-bold uppercase shadow-md">
            {user?.userName.substring(0, 2)}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-12 p-6">
        {/* Header/Name Info */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 capitalize">@{user.userName}</h2>
            <p className="text-sm text-slate-500">Age: <span className="font-semibold text-slate-700">{user?.age} years</span></p>
          </div>
          
          {/* Verification Status Badge */}
          {user.isVerified ? (
            <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full flex items-center gap-1">
              ✓ Verified
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-semibold text-amber-700 bg-amber-100 rounded-full flex items-center gap-1">
              ⚠ Unverified
            </span>
          )}
        </div>

        {/* User Details Details */}
        <div className="space-y-4 border-t border-slate-100 pt-4">
          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Email Address</label>
            <span className="text-sm text-slate-700 font-medium break-all">{user?.email}</span>
          </div>

          {/* User ID */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">User ID</label>
            <code className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded font-mono block overflow-x-auto mt-0.5">
              {user?._id}
            </code>
          </div>

          {/* OTP Section (Kyunke user unverified hai) */}
          {!user?.isVerified && (
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-3.5 mt-2">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs font-bold text-rose-700 uppercase tracking-wide">Pending OTP</span>
                <span className="text-xs font-mono font-bold bg-white text-rose-600 px-2 py-0.5 rounded shadow-sm border border-rose-200">
                  {user?.otp}
                </span>
              </div>
              <p className="text-[11px] text-rose-500 leading-relaxed">
              </p>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 shadow-sm ${
            user?.isVerified 
              ? 'bg-slate-800 hover:bg-slate-900 text-white' 
              : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100'
          }`}>
            {user?.isVerified ? 'Manage Profile' : 'Verify Account Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
