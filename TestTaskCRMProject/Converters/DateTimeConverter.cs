using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace TestTaskCRMProject.Converters
{
    public class DateTimeConverter : JsonConverter<DateTime>
    {
        private string _dateFormat="yyyy-MM-dd";
        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            return DateTime.ParseExact(reader.GetString(), _dateFormat, CultureInfo.InvariantCulture);
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            writer.WriteStringValue(value.ToString(_dateFormat));
        }
    }
}
