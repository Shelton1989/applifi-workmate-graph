"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateOrConnectWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregateRatingInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceCreateOrConnectWithoutAggregateRatingInput = class ExperienceCreateOrConnectWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceCreateOrConnectWithoutAggregateRatingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput)
], ExperienceCreateOrConnectWithoutAggregateRatingInput.prototype, "create", void 0);
ExperienceCreateOrConnectWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutAggregateRatingInput", {
        isAbstract: true
    })
], ExperienceCreateOrConnectWithoutAggregateRatingInput);
exports.ExperienceCreateOrConnectWithoutAggregateRatingInput = ExperienceCreateOrConnectWithoutAggregateRatingInput;
