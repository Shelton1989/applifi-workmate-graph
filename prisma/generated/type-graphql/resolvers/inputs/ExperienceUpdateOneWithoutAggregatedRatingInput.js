"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneWithoutAggregatedRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutAggregatedRatingInput");
const ExperienceCreateWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregatedRatingInput");
const ExperienceUpdateWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceUpdateWithoutAggregatedRatingInput");
const ExperienceUpsertWithoutAggregatedRatingInput_1 = require("../inputs/ExperienceUpsertWithoutAggregatedRatingInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneWithoutAggregatedRatingInput = class ExperienceUpdateOneWithoutAggregatedRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregatedRatingInput_1.ExperienceCreateWithoutAggregatedRatingInput)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutAggregatedRatingInput_1.ExperienceCreateOrConnectWithoutAggregatedRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutAggregatedRatingInput_1.ExperienceCreateOrConnectWithoutAggregatedRatingInput)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutAggregatedRatingInput_1.ExperienceUpsertWithoutAggregatedRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutAggregatedRatingInput_1.ExperienceUpsertWithoutAggregatedRatingInput)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutAggregatedRatingInput_1.ExperienceUpdateWithoutAggregatedRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutAggregatedRatingInput_1.ExperienceUpdateWithoutAggregatedRatingInput)
], ExperienceUpdateOneWithoutAggregatedRatingInput.prototype, "update", void 0);
ExperienceUpdateOneWithoutAggregatedRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneWithoutAggregatedRatingInput", {
        isAbstract: true
    })
], ExperienceUpdateOneWithoutAggregatedRatingInput);
exports.ExperienceUpdateOneWithoutAggregatedRatingInput = ExperienceUpdateOneWithoutAggregatedRatingInput;
