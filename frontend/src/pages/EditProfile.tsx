
import { useEffect, useState } from "react";
import { getProfile,updateProfile }from "../api/accountsApi";

const BASE_URL = "http://127.0.0.1:8000";

interface ProfileData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile: {
    phone: string | null;
    address: string | null;
    avatar: string | null;
  };
}

export default function EditProfile() {
  const [data, setData] = useState<ProfileData | null>(null);
  const [form, setForm] = useState<any>({});
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);


useEffect(()=>{
  getProfile()
  .then((res)=>{
    setData(res.data);
    setForm({first_name:res.data.first_name,
      last_name:res.data.last_name,
      phone:res.data.profile.phone,
      addres:res.data.profile.address,
    });

  })
  .catch(()=>setError("Failed to load profile")
  

  )
  .finally(()=>setLoading(false));
},[]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setForm({ ...form, avatar: e.target.files[0] });
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("first_name", form.first_name);
      formData.append("last_name", form.last_name);
      formData.append("profile.phone", form.phone || "");
      formData.append("profile.address", form.address || "");

      if (form.avatar) {
        formData.append("profile.avatar", form.avatar);
      }

      const updated = await updateProfile(formData);
      setData(updated);
      setEditMode(false);
    } catch {
      setError("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-center p-10">Loading profile...</p>;
  if (error) return <p className="text-center text-red-500 p-10">{error}</p>;
  if (!data) return null;

  const avatarUrl = data.profile.avatar
    ? `${BASE_URL}${data.profile.avatar}`
    : "https://via.placeholder.com/150";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="bg-white rounded-2xl shadow p-6 flex gap-8">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={avatarUrl}
            className="w-36 h-36 rounded-full object-cover border"
            alt="Avatar"
          />

          {editMode && (
            <label className="text-sm text-blue-600 cursor-pointer">
              Change avatar
              <input
                type="file"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          {editMode ? (
            <>
              <input
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                className="input"
                placeholder="First name"
              />
              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                className="input"
                placeholder="Last name"
              />
              <input
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
                className="input"
                placeholder="Phone"
              />
              <input
                name="address"
                value={form.address || ""}
                onChange={handleChange}
                className="input"
                placeholder="Address"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-semibold">
                {data.first_name} {data.last_name}
              </h2>
              <p>
                <strong>Email:</strong> {data.email}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {data.profile.phone ?? "Not provided"}
              </p>
              <p>
                <strong>Address:</strong>{" "}
                {data.profile.address ?? "Not provided"}
              </p>
            </>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {editMode ? (
              <>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="px-5 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
