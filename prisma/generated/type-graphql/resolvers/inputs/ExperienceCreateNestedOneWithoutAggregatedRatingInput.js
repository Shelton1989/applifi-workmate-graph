"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutAggregatedRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutAggregatedRatingInput");
const ExperienceCreateWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregatedRatingInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutAggregatedRatingInput = class ExperienceCreateNestedOneWithoutAggregatedRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput)
], ExperienceCreateNestedOneWithoutAggregatedRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutAggregatedRatingInput_1.ExperienceCreateOrConnectWithoutAggregatedRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutAggregatedRatingInput_1.ExperienceCreateOrConnectWithoutAggregatedRatingInput)
], ExperienceCreateNestedOneWithoutAggregatedRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutAggregatedRatingInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutAggregatedRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutAggregatedRatingInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutAggregatedRatingInput);
exports.ExperienceCreateNestedOneWithoutAggregatedRatingInput = ExperienceCreateNestedOneWithoutAggregatedRatingInput;
