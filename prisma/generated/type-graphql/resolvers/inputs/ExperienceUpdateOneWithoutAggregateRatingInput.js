"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutAggregateRatingInput");
const ExperienceCreateWithoutAggregateRatingInput_1 = require("../inputs/ExperienceCreateWithoutAggregateRatingInput");
const ExperienceUpdateWithoutAggregateRatingInput_1 = require("../inputs/ExperienceUpdateWithoutAggregateRatingInput");
const ExperienceUpsertWithoutAggregateRatingInput_1 = require("../inputs/ExperienceUpsertWithoutAggregateRatingInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneWithoutAggregateRatingInput = class ExperienceUpdateOneWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutAggregateRatingInput_1.ExperienceCreateWithoutAggregateRatingInput)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutAggregateRatingInput_1.ExperienceCreateOrConnectWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutAggregateRatingInput_1.ExperienceCreateOrConnectWithoutAggregateRatingInput)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutAggregateRatingInput_1.ExperienceUpsertWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutAggregateRatingInput_1.ExperienceUpsertWithoutAggregateRatingInput)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutAggregateRatingInput_1.ExperienceUpdateWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutAggregateRatingInput_1.ExperienceUpdateWithoutAggregateRatingInput)
], ExperienceUpdateOneWithoutAggregateRatingInput.prototype, "update", void 0);
ExperienceUpdateOneWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneWithoutAggregateRatingInput", {
        isAbstract: true
    })
], ExperienceUpdateOneWithoutAggregateRatingInput);
exports.ExperienceUpdateOneWithoutAggregateRatingInput = ExperienceUpdateOneWithoutAggregateRatingInput;
