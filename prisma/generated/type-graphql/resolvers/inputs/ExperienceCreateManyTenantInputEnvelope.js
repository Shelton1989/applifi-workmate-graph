"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCreateManyTenantInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateManyTenantInput_1 = require("../inputs/ExperienceCreateManyTenantInput");
let ExperienceCreateManyTenantInputEnvelope = class ExperienceCreateManyTenantInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ExperienceCreateManyTenantInput_1.ExperienceCreateManyTenantInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ExperienceCreateManyTenantInputEnvelope.prototype, "data", void 0);
ExperienceCreateManyTenantInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ExperienceCreateManyTenantInputEnvelope", {
        isAbstract: true
    })
], ExperienceCreateManyTenantInputEnvelope);
exports.ExperienceCreateManyTenantInputEnvelope = ExperienceCreateManyTenantInputEnvelope;
