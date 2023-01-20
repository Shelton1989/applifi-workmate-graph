"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateNestedOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutAggregateRatingInput");
const ExperienceCreateWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregateRatingInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateNestedOneWithoutAggregateRatingInput = class ExperienceCreateNestedOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput)
], ExperienceCreateNestedOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutAggregateRatingInput_1.ExperienceCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutAggregateRatingInput_1.ExperienceCreateOrConnectWithoutAggregateRatingInput)
], ExperienceCreateNestedOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateNestedOneWithoutAggregateRatingInput.prototype, "connect", void 0);
ExperienceCreateNestedOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateNestedOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], ExperienceCreateNestedOneWithoutAggregateRatingInput);
exports.ExperienceCreateNestedOneWithoutAggregateRatingInput = ExperienceCreateNestedOneWithoutAggregateRatingInput;
