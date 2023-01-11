"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUpdateManyWithWhereWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LocationScalarWhereInput_1 = require("../inputs/LocationScalarWhereInput");
const LocationUpdateManyMutationInput_1 = require("../inputs/LocationUpdateManyMutationInput");
let LocationUpdateManyWithWhereWithoutTenantInput = class LocationUpdateManyWithWhereWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationScalarWhereInput_1.LocationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationScalarWhereInput_1.LocationScalarWhereInput)
], LocationUpdateManyWithWhereWithoutTenantInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LocationUpdateManyMutationInput_1.LocationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LocationUpdateManyMutationInput_1.LocationUpdateManyMutationInput)
], LocationUpdateManyWithWhereWithoutTenantInput.prototype, "data", void 0);
LocationUpdateManyWithWhereWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationUpdateManyWithWhereWithoutTenantInput", {
        isAbstract: true
    })
], LocationUpdateManyWithWhereWithoutTenantInput);
exports.LocationUpdateManyWithWhereWithoutTenantInput = LocationUpdateManyWithWhereWithoutTenantInput;
