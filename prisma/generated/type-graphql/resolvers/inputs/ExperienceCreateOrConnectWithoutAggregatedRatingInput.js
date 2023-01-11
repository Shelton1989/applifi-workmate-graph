"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutAggregatedRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregatedRatingInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutAggregatedRatingInput = class ExperienceCreateOrConnectWithoutAggregatedRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutAggregatedRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput)
], ExperienceCreateOrConnectWithoutAggregatedRatingInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutAggregatedRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutAggregatedRatingInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutAggregatedRatingInput);
exports.ExperienceCreateOrConnectWithoutAggregatedRatingInput = ExperienceCreateOrConnectWithoutAggregatedRatingInput;
