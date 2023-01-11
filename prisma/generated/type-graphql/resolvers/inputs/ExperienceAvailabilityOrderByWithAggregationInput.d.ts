import { ExperienceAvailabilityAvgOrderByAggregateInput } from "../inputs/ExperienceAvailabilityAvgOrderByAggregateInput";
import { ExperienceAvailabilityCountOrderByAggregateInput } from "../inputs/ExperienceAvailabilityCountOrderByAggregateInput";
import { ExperienceAvailabilityMaxOrderByAggregateInput } from "../inputs/ExperienceAvailabilityMaxOrderByAggregateInput";
import { ExperienceAvailabilityMinOrderByAggregateInput } from "../inputs/ExperienceAvailabilityMinOrderByAggregateInput";
import { ExperienceAvailabilitySumOrderByAggregateInput } from "../inputs/ExperienceAvailabilitySumOrderByAggregateInput";
export declare class ExperienceAvailabilityOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    experienceId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    availabilityType?: "asc" | "desc" | undefined;
    weekendSpacesAvailable?: "asc" | "desc" | undefined;
    dailySpacesAvailable?: "asc" | "desc" | undefined;
    hourlySpacesAvailable?: "asc" | "desc" | undefined;
    halfHourlySpacesAvailable?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ExperienceAvailabilityCountOrderByAggregateInput | undefined;
    _avg?: ExperienceAvailabilityAvgOrderByAggregateInput | undefined;
    _max?: ExperienceAvailabilityMaxOrderByAggregateInput | undefined;
    _min?: ExperienceAvailabilityMinOrderByAggregateInput | undefined;
    _sum?: ExperienceAvailabilitySumOrderByAggregateInput | undefined;
}
