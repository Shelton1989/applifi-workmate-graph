"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceUpdateOneWithoutLocationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateOrConnectWithoutLocationsInput_1 = require("../inputs/ExperienceCreateOrConnectWithoutLocationsInput");
const ExperienceCreateWithoutLocationsInput_1 = require("../inputs/ExperienceCreateWithoutLocationsInput");
const ExperienceUpdateWithoutLocationsInput_1 = require("../inputs/ExperienceUpdateWithoutLocationsInput");
const ExperienceUpsertWithoutLocationsInput_1 = require("../inputs/ExperienceUpsertWithoutLocationsInput");
const ExperienceWhereUniqueInput_1 = require("../inputs/ExperienceWhereUniqueInput");
let ExperienceUpdateOneWithoutLocationsInput = class ExperienceUpdateOneWithoutLocationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateWithoutLocationsInput_1.ExperienceCreateWithoutLocationsInput)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutLocationsInput_1.ExperienceCreateOrConnectWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceCreateOrConnectWithoutLocationsInput_1.ExperienceCreateOrConnectWithoutLocationsInput)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpsertWithoutLocationsInput_1.ExperienceUpsertWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpsertWithoutLocationsInput_1.ExperienceUpsertWithoutLocationsInput)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceWhereUniqueInput_1.ExperienceWhereUniqueInput)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateWithoutLocationsInput_1.ExperienceUpdateWithoutLocationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateWithoutLocationsInput_1.ExperienceUpdateWithoutLocationsInput)
], ExperienceUpdateOneWithoutLocationsInput.prototype, "update", void 0);
ExperienceUpdateOneWithoutLocationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceUpdateOneWithoutLocationsInput", {
        isAbstract: true
    })
], ExperienceUpdateOneWithoutLocationsInput);
exports.ExperienceUpdateOneWithoutLocationsInput = ExperienceUpdateOneWithoutLocationsInput;